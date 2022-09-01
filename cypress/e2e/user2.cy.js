import {tokens} from "../support/tokens";

describe('User2 APIs', function () {
    it('Create and delete user2', function () {
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
                Authorization: tokens().user2Token
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('status', "active")
            let userId = response.body.id
            cy.request({
                method: 'DELETE',
                url: `https://gorest.co.in/public/v2/users/${userId}`,
                headers: {
                    Authorization: tokens().user2Token
                },
            }).then((deletedUser) => {
                expect(deletedUser.status).to.eq(204)
            });
        });
    });
});
