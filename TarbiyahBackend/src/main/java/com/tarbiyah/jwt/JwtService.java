package com.tarbiyah.jwt;

import java.util.Date;
import java.util.concurrent.ConcurrentHashMap.KeySetView;
import java.util.function.Function;

import javax.crypto.SecretKey;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.tarbiyah.entity.User;
import com.tarbiyah.repository.TokenRepository;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service

public class JwtService {

	private final TokenRepository tokenRepository;

	public JwtService(TokenRepository tokenRepository) {
		super();
		this.tokenRepository = tokenRepository;
	}
	
	private final String SECURITY_KEY="d169552a202ace4ed9b31a326df08noyon3e197a10213030f7c4be596ba99b6";
	private long accessTokenExpire=8640000;
	 

	 private long refreshTokenExpire=604800000;
	 
	 public Claims extractAllClaims(String token)
	 {
		 return Jwts
				 .parser()
				 .verifyWith(getSigninKey())
				 .build()
				 .parseSignedClaims(token)
				 .getPayload();
	 }
	 
	 public <T> T extractClaim(String token,Function<Claims, T>resolver)
	 {
		 Claims claims=extractAllClaims(token);
		 return resolver.apply(claims);
	 }
	 
	 public String extractUsername(String token) {
		 return extractClaim(token, Claims::getSubject);
	 }
	 
	 public boolean isTokenExpired(String token)
	 {
		 return extractExpiration(token).before(new Date());
	 }
	 
	 private Date extractExpiration(String token)
	 {
		 return extractClaim(token, Claims::getExpiration);
	 }
	 
	 public boolean isValid(String token,UserDetails user)
	 {
		 String username=extractUsername(token);
		 
		 boolean validToken=tokenRepository.findByAccessToken(token).map(t -> !t.isLogout()).orElse(false);
		 return (username.equals(user.getUsername()) && !isTokenExpired(token) && validToken);
	 }
	 
	 public boolean isValidRefreshToken(String token,UserDetails user) {
		 String username=extractUsername(token);
		 boolean validRefreshToken=tokenRepository.findByRefreshToken(token).map(t -> !t.isLogout()).orElse(false);
			return (username.equals(user.getUsername()) && !isTokenExpired(token) && validRefreshToken);
	 }
	 //generate token
	 
	 private String generateToken(User user,long expiredTime)
	 {
		 return Jwts
				 .builder()
				 .subject(user.getUsername())
				 .issuedAt(new Date(System.currentTimeMillis()))
				 .expiration(new Date(System.currentTimeMillis()+expiredTime))
				 .signWith(getSigninKey())
				 .compact();
	 }
	 
	 public String generateAccessToken(User user) {
		 return generateToken(user, accessTokenExpire);
	 }
	 public String generateRefreshToken(User user)
	 {
		 return generateToken(user, refreshTokenExpire);
	 }
	 
	 private SecretKey getSigninKey() {
		 byte [] keyBytes=Decoders.BASE64URL.decode(SECURITY_KEY);
		 return Keys.hmacShaKeyFor(keyBytes);
	 }
}
