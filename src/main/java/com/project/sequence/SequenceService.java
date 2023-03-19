package com.project.sequence;

import org.springframework.stereotype.Service;

@Service
public interface SequenceService {
	
	Long findNextSequenceByService(String service);
	
	void updateNextSequence(String service);

}
