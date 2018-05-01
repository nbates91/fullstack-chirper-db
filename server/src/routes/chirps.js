import { Router } from 'express';
import db from '../config/db';
let router = Router();

router.get('/:id?', (req, res) => {
	res.send(db.executeQuery('SELECT * FROM chirps;'));
});

// router.post('/', (req, res) => {
// 	chirpStore.CreateChirp(req.body);
// 	res.sendStatus(200);
// });

// router.put('/:id', (req, res) => {
// 	console.log(req.body);
// 	let id = req.params.id;
// 	chirpStore.UpdateChirp(id, req.body);
// 	res.sendStatus(200);
// });

// router.delete('/:id', (req, res) => {
// 	let id = req.params.id;
// 	chirpStore.DeleteChirp(id);
// 	res.sendStatus(200);
// });

export default router;
