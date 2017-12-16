function test(language) {
    let strings = require('../index').load(language);
    console.log(language || 'english');
    console.log('App Name = ' + strings.get('key.system.application.name'));
    console.log('Creature MONSTER_WATER_14 = ' + strings.getCreature('MONSTER_WATER_14'));
}

test();
test('french');
