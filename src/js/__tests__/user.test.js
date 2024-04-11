import { Team } from '../app';

const bowerman = {
  name: 'Лучник',
  type: 'Bowerman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10
};

const magician = {
  name: 'Маг',
  type: 'Magician',
  health: 100,
  level: 2,
  attack: 10,
  defence: 40
};

const swordsman = {
  name: 'Мечник',
  type: 'Swordsman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10
};

describe('Team', () => {
  let team;

  beforeEach(() => {
    team = new Team();
  });

  test('adding a new character to the team', () => {
    team.add(bowerman);
    expect(team.members.has(bowerman)).toBe(true);
  });

  test('adding an existing character to the team should throw an error', () => {
    team.add(swordsman);
    expect(() => {
      team.add(swordsman);
    }).toThrow('This character is already in the team');
  });

  test('adding all characters to the team', () => {
    team.addAll(bowerman, swordsman, magician, bowerman);
    expect(team.members.has(bowerman) && team.members.has(swordsman) && team.members.has(magician)).toBe(true);
  });

  test('change Set to array', () => {
    team.addAll(bowerman, swordsman, magician);
    expect(team.toArray()).toEqual([bowerman, swordsman, magician]);
  });
});