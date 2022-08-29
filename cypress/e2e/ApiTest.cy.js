describe('Testing API', function () {
    it('Test GET request ', function () {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                Authorization: 'Bearer bdf5b671342f10124159d881d8c2c70b77b103b1a9552271621374132362f335'
            }
        }).then((GET) => {
            expect(GET.status).to.eq(200)
        })
    });

    it('Post request', function () {
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
        })

    });
})
