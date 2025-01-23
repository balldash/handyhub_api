const request = require('supertest');
const express = require('express');
const userRoutes = require('../../app/routes/userRoutes');

const app = express();
app.use(userRoutes);

describe('GET /users', () => {
    it('should return a list of users', async () => {
        const response = await request(app).get('/users');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([
            { id: 1, name: 'Alice'},
            { id: 2, name: 'Bob'},
        ]);
    });
});