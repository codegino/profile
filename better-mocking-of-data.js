import * as faker from 'faker';
import {CHALLENGE_TYPE, ORDER_TYPE, SEGMENT_TYPE} from '../../challenges.enum';

export const createMockRule = (overrides = {}) => ({
  awardAmount: faker.commerce.price(10, 100),
  id: faker.datatype.number(),
  ruleDescription: faker.lorem.sentence(4),
  ...overrides,
});

export const createMockStage = (overrides = {}) => ({
  cta: faker.lorem.word(),
  landingUrl: faker.internet.url(),
  ...overrides,
});

export const createMockChallenge = (overrides = {}) => ({
  campaignID: faker.datatype.number(),
  campaignName: faker.lorem.words(),
  campaignDescription: faker.lorem.sentence(),
  maxAwardLimit: faker.commerce.price(100, 1000),
  orderType: ORDER_TYPE.OFFLINE,
  awardedAmount: faker.commerce.price(10, 100),
  rules: [createMockRule()],
  campaignStartDate: faker.date.past().toISOString(),
  campaignEndDate: faker.date.past().toISOString(),
  isActive: faker.datatype.boolean(),
  tips: [faker.lorem.sentence(), faker.lorem.sentence()],
  tipsUrl: faker.internet.url(),
  tipsTitle: faker.lorem.words(),
  stages: [createMockStage()],
  customerSegment: {name: SEGMENT_TYPE.NEW_SNG_CUSTOMERS},
  banner: faker.image.imageUrl(),
  thumbnail: faker.image.imageUrl(),
  landingUrl: faker.internet.url(),
  ...overrides,
});
