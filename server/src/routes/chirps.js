import { Router } from 'express';
import Table from '../table';

let router = Router();
let tableName = new Table('chirps');

router.get('/', (req, res) => {
	tableName
		.getAll()
		.then(results => {
			res.json(results);
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
			res.json(results);
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		});
});

router.post('/', (req, res) => {
	tableName
		.insert(req.body)
		.then(results => {
			res.json(results);
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		});
});

router.put('/:id', (req, res) => {
	tableName
		.update(req.params.id, req.body)
		.then(results => {
			res.json(results);
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		});
});

router.delete('/:id', (req, res) => {
	tableName
		.delete(req.params.id)
		.then(results => {
			res.json(results);
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		});
});

export default router;
