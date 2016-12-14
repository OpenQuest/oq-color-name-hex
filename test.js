'use strict';

var mocha = require('mocha');
var chai = require('chai');
var colors = require('./index.js');

var expect = chai.expect;

describe('colors', function() {

    it('should export an object', function() {
        expect(colors).to.be.an('object');
    });

    it('should return the right decimal value', function() {
        expect(colors.olivedrab).to.eql('#6b8e23');
        expect(colors.darkblue).to.eql('#00008b');
    });

    it('should return undefined if the color name not exists', function() {
        expect(colors.redss).to.be.undefined;
    });
});