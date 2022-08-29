describe('API testing', function () {
    it('Creat user', function () {
        // cy.visit('https://www.demoblaze.com/')
        // cy.get('#signin2').click()
        // cy.get('#sign-username').clear().type('araqs1934')
        // cy.get('#sign-password').clear().type('test123456')
        // cy.get('button').contains('Sign up').click()
        // cy.wait(5000)
        const map = new Map();
        cy.visit('https://sds-frontend-stage-rgrpzfjxqa-uc.a.run.app')
        cy.get('button').contains('Accept all').click()
        cy.request({
            method: 'POST',
            url: 'https://sds-backend-buyer-stage-rgrpzfjxqa-uc.a.run.app/api/auth/buyer/login',
            body: {
                "email": "grigor@gmsaial.com",
                "password": "testtt"
            },
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyaWdvckBnbXNhaWFsLmNvbSIsInN1YiI6IjYyYjNmN2YzYWQ4MmQzNDZkNDNjNmRiMiIsImlhdCI6MTY1OTM0NDcwMSwiZXhwIjoxNjU5NDMxMTAxfQ.TSn_7UXAMizPSpPqFzN9NmN8BcRBHjFNWnyrS-_X3OU",
                "content-type": "application/json"
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            cy.wait(2000)
            cy.log(response.body.accessToken)
            localStorage.setItem('accessToken', response.body.accessToken);
            cy.wait(2000)
            cy.reload()
        });
    })
})