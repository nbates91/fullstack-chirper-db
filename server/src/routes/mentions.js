import Table from '../table';
import { callProcedure } from '../config/db';
import { Router } from 'express';
import chirpsRouter from './chirps';

let router = Router();
let tableName = new Table('mentions');

router.post('/:mentionedUser', (req, res) => {
	callProcedure('spAddMention', [req.params.mentionedUser, req.body.userid, req.body.text, req.body.location])
		.then(results => {
			res.json(results);
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		});
});

router.get('/:userid', (req, res) => {
	callProcedure(`spUserMentions`, req.params.userid)
		.then(results => {
			res.json(results[0]);
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		});
});

export default router;
