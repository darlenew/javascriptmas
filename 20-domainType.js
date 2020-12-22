function domainType(domains) {
    const domainLabels = {
        'org': 'organization',
        'com': 'commercial',
        'net': 'network',
        'info': 'information'
    }
    
    return domains.map(domain => domainLabels[domain.split('.').pop()])
}



/**
* Test Suite 
*/
describe('domainType()', () => {
    it('returns list of domain types', () => {
        // arrange
        const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];
        
        // act
        const result = domainType(domains);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual(["organization", "commercial", "network", "information"]);
    });
});
