package com.project.sequence.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.dao.SequenceDao;
import com.project.entity.Sequence;
import com.project.sequence.SequenceService;

@Service
public class SequenceServiceImpl implements SequenceService {
	
	@Autowired
	SequenceDao sequenceDao;

	@Override
	public Long findNextSequenceByService(String service) {
		for(Sequence s: sequenceDao.findAll()) {
			if (s.getService().equals(service))
				return s.getNextAvailableId();
		}
		return null;
	}

	@Override
	public void updateNextSequence(String service) {
		for(Sequence s: sequenceDao.findAll()) {
			if (s.getService().equals(service)) {
				s.setNextAvailableId(s.getNextAvailableId() + 1);
				sequenceDao.saveAndFlush(s);
			}
		}
		
	}

}
