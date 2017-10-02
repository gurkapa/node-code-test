'use strict';

let expect = require('chai').expect;
let slugifier = require('../lib/slugifier');

describe('slugifier', () => {

    describe('slugify', () => {

        it('should not return slug with / signs', done => {
            let testString = 'hhej/jehj/jehjh';
            let slug = slugifier.slugify(testString);
            expect(slug).to.not.contain('/');
            done();
        })

        it('should not return slug with ? signs', done => {
            let testString = 'hhej?jehj?jehjh';
            let slug = slugifier.slugify(testString);
            expect(slug).to.not.contain('?');
            done();
        })

        it('should not return slug with & signs', done => {
            let testString = '&hhej?jehj?jehjh&&';
            let slug = slugifier.slugify(testString);
            expect(slug).to.not.contain('&');
            done();
        })

        it('should replace å with a', done => {
            let test = 'påse';
            let slug = slugifier.slugify(test);
            expect(slug).to.equal('pase');
            done();
        })

        it('should replace ö with o', done => {
            let test = 'öga';
            let slug = slugifier.slugify(test);
            expect(slug).to.equal('oga');
            done();
        })

        it('should replace ä with a', done => {
            let test = 'ärta';
            let slug = slugifier.slugify(test);
            expect(slug).to.equal('arta');
            done();
        })

        it('should replace spaces with -', done => {
            let test = 'påse öga ärta';
            let slug = slugifier.slugify(test);
            expect(slug).to.equal('pase-oga-arta');
            done();
        })

        it('should trim string', done => {
            let test = ' påse öga ärta ';
            let slug = slugifier.slugify(test);
            expect(slug).to.equal('pase-oga-arta');
            done();
        })

    })//slugifyFromString
})