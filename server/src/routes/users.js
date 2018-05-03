import { Router } from 'express';
import Table from '../table';
import { executeQuery, callProcedure } from '../config/db';

let router = Router();
let tableName = new Table('users');

router.get('/user/:name', (req, res) => {
	executeQuery(`select id from users where name = '${req.params.name}'`)
		.then(results => {
			return res.json(results[0]);
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		});
});

router.get('/chirps/:userid', (req, res) => {
	callProcedure('spGetAllUserChirps', [req.params.userid])
		.then(results => {
			return res.json(results[0]);
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		});
});

router.get('/mentions/:userid', (req, res) => {
	callProcedure('spGetAllUserMentions', [req.params.userid])
		.then(results => {
			return res.json(results[0]);
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		});
});

router.get('/:id', (req, res) => {
	tableName
		.getOne(req.params.id)
		.then(results => {
			return res.json(results);
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		});
});

export default router;
