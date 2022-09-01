import {tokens} from "../support/tokens";

describe('User1 APIs', function () {
    it('Get users list', function () {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
        }).then((GET) => {
            expect(GET.status).to.eq(200)
        })
    });

    it('Create user1', function () {
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
                Authorization: tokens().user1Token
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
        })
    });
})
