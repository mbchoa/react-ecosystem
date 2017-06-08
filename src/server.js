import express from 'express';
import path from 'path';

const app = express();
app.use(express.static(__dirname));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(3000, () => {
    console.log('Express server started and listening on port 3000');
});
