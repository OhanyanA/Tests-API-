describe('API testing', function () {
    it('Creat user', function () {
        let mail = 'test' + Date.now() + '@mail.com';
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            body: {
                "name": "Tenali Ramakrishna",
                "gender": "male",
                "email": mail,
                "status": "active"
            },
            headers: {
                Authorization: 'Bearer bdf5b671342f10124159d881d8c2c70b77b103b1a9552271621374132362f335'
            }
        }).then((response) => {
            expect(response.status).to.eq(201)

        });
    });

    it('Delete user', function () {
        let mail = 'test' + Date.now() + '@mail.com';
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            body: {
                "name": "Tenali Ramakrishna",
                "gender": "male",
                "email": mail,
                "status": "active"
            },
            headers: {
                Authorization: 'Bearer bdf5b671342f10124159d881d8c2c70b77b103b1a9552271621374132362f335'
            },
        }).then((response) => {
            expect(response.body).to.have.property('status', "active")
            global.userId = response.body.id
            cy.request({
                method: 'DELETE',
                body: {"query": "mutation{deleteUser(input: {id: 7}){user {id name email gender status}}}"},
                url: `https://gorest.co.in/public/v2/users/${userId}`,
                headers: {
                    "Connection": "keep-alive",
                    Authorization: 'Bearer bdf5b671342f10124159d881d8c2c70b77b103b1a9552271621374132362f335',
                    'Content-type': 'application/json'
                },
            }).then((deletedUser) => {
                expect(deletedUser.status).to.eq(204)
            });
        });
    });
})


