package com.project.sequence;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.dao.SequenceDao;

import org.springframework.stereotype.Service;


@Service
public interface SequenceService {
	
	Long findNextSequenceByService(String service);
	
	void updateNextSequence(String service);

}
