package com.movie.backend.generator;

import java.io.Serializable;
import java.util.Random;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;
import org.springframework.stereotype.Service;

@Service
public class RandomIdGenerator implements IdentifierGenerator{
	
	@Override
	public Serializable generate(SharedSessionContractImplementor session, Object object) throws HibernateException {
		
		Random random = new Random();
		
		return random.nextInt(99999999);
	}
	
	

}
