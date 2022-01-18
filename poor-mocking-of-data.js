/* eslint-env jest */
import React from 'react';
import {
  render,
  fireEvent,
  getByLabelText,
  getByText,
  queryByText,
  wait,
} from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {BrowserRouter as Router} from 'react-router-dom';
import ProductForm from '../';
import {mockWindowlocalStorage} from '../../../../../../test/react-helper/mocks/window';

mockWindowlocalStorage();

new MockAdapter(axios); // eslint-disable-line

beforeEach(() => {
  jest.clearAllMocks();
});

jest.mock('../../../../../lib/api', () => {
  return jest.fn(function () {
    (this.cancel = () => {}),
      (this.post = () => {}),
      (this.get = () =>
        Promise.resolve({
          code: 200,
          status: 'SUCCESS',
          data: {
            config: {
              entityMetaData: {
                address: {
                  AdditionalInfo: {
                    id: 67,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  AlternatePhone: {
                    id: 46,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  BuildingName: {
                    id: 47,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  CompanyName: {
                    id: 141,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  FirstName: {
                    id: 48,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  Floor: {
                    id: 49,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  LastName: {
                    id: 50,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  Phone: {
                    id: 51,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  Unit: {
                    id: 52,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  facebookHandle: {
                    id: 147,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                },
                customer: {
                  AmbassadorRefereeDeviceId: {
                    id: 124,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  AmbassadorReferrerCode: {
                    id: 122,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  AmbassadorReferrerCodeSetAt: {
                    id: 125,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  Companyname: {
                    id: 1,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  CustomerType: {
                    id: 2,
                    indexed: false,
                    mandatory: false,
                    type: 'multiValued Enum',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: [
                        'VIP',
                        'Blacklisted',
                        'Others',
                        'Problematic',
                        'B2B',
                      ],
                    },
                  },
                  FmcEmailOptin: {
                    id: 3,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  FmcMbrshipStartDate: {
                    id: 4,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  FpB2BEmailOptin: {
                    id: 118,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  FpB2BSMSOptin: {
                    id: 117,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  FpEReceiptOptin: {
                    id: 115,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  FpEReceiptOptinLastUpdated: {
                    id: 135,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  FpEmailOptin: {
                    id: 5,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  FpEmailOptinLastUpdated: {
                    id: 107,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  FpMailOptin: {
                    id: 6,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  FpMobileOptin: {
                    id: 7,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  FpSMSOptin: {
                    id: 8,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  FpSMSOptinLastUpdated: {
                    id: 108,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  Fpnloptin: {
                    id: 9,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  Gender: {
                    id: 10,
                    indexed: false,
                    mandatory: false,
                    type: 'enum',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: ['Male', 'Female', 'Unknown'],
                    },
                  },
                  IsB2B: {
                    id: 111,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  IsBlacklisted: {
                    id: 11,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  IsOthers: {
                    id: 12,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  IsProblematic: {
                    id: 13,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  IsSubstitutable: {
                    id: 138,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  IsVip: {
                    id: 14,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  JobFunction: {
                    id: 15,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  JwcCardSNo: {
                    id: 16,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  JwcEmailOptin: {
                    id: 17,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  JwcMbrshipEndDate: {
                    id: 18,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  JwcMbrshipNo: {
                    id: 19,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  JwcMbrshipStartDate: {
                    id: 20,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  JwcName: {
                    id: 21,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Marital Status': {
                    id: 22,
                    indexed: false,
                    mandatory: false,
                    type: 'enum',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: ['Married', 'Unmarried', 'Unknown'],
                    },
                  },
                  NRIC2: {
                    id: 97,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  OtherComments: {
                    id: 24,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  Proemailoptin1: {
                    id: 25,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'product-substitution': {
                    id: 139,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  sngIsAgeVerified: {
                    id: 71,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                },
                offer: {
                  sapReference: {
                    id: 70,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                },
                order: {
                  1111: {
                    id: 120,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Billing Address': {
                    id: 26,
                    indexed: false,
                    mandatory: false,
                    type: 'text',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Delivery Notes': {
                    id: 27,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Invoice Number': {
                    id: 28,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Orocommerce Order Id': {
                    id: 29,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'SAP Po': {
                    id: 143,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  awardingLinkPoints: {
                    id: 129,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  bulkOrder: {
                    id: 30,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  dbMemberLinkStatus: {
                    id: 128,
                    indexed: false,
                    mandatory: false,
                    type: 'number',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  email: {
                    id: 81,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  isBoysBrigade: {
                    id: 136,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  isDBMember: {
                    id: 126,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  linkPointAwardAmount: {
                    id: 127,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  offer: {
                    id: 57,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  originalRedemptionLinkPoints: {
                    id: 131,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  pickupPersonContact: {
                    id: 64,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  pickupPersonName: {
                    id: 65,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  redemptionLinkPoints: {
                    id: 130,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  sngCart: {
                    id: 80,
                    indexed: false,
                    mandatory: false,
                    type: 'text',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  sngSessionID: {
                    id: 73,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  sngType: {
                    id: 69,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  sngVerificationStatus: {
                    id: 72,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'zs-sap-complete-action-done': {
                    id: 61,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'zs-sap-create-action-done': {
                    id: 60,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'zs-sap-create-action-started': {
                    id: 168,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                },
                product: {
                  'Country of Origin': {
                    id: 31,
                    indexed: true,
                    mandatory: false,
                    type: 'country',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Dietary Attributes': {
                    id: 32,
                    indexed: true,
                    mandatory: false,
                    type: 'multiValued Enum',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: [
                        'Vegetarian',
                        'Hypoallergenic',
                        'Lactose-Free',
                        'Gluten-Free',
                        'Healthier Choice',
                        'Organic',
                        'Halal',
                        'Trans-Fat Free',
                      ],
                    },
                  },
                  DisplayUnit: {
                    id: 33,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Fp Seller Email': {
                    id: 84,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Fp Seller ID': {
                    id: 92,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Fp Seller Name': {
                    id: 91,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Fp Seller Phone': {
                    id: 89,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Fp Seller Product Code': {
                    id: 82,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'House Brand': {
                    id: 34,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  Ingredients: {
                    id: 35,
                    indexed: false,
                    mandatory: false,
                    type: 'text',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Key Information': {
                    id: 36,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Link Product Code': {
                    id: 77,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'LinkPoint Eligible': {
                    id: 63,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Nutritional Data': {
                    id: 38,
                    indexed: false,
                    mandatory: false,
                    type: 'text',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'PLU Number': {
                    id: 119,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Pack Size': {
                    id: 102,
                    indexed: false,
                    mandatory: false,
                    type: 'number',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Pack Unit': {
                    id: 103,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  Preparation: {
                    id: 40,
                    indexed: false,
                    mandatory: false,
                    type: 'text',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Refund Policy': {
                    id: 98,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'SAP Product Name': {
                    id: 173,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'SAP SubClass': {
                    id: 62,
                    indexed: false,
                    mandatory: false,
                    type: 'number',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  SAPSupplierCode: {
                    id: 86,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Seller ID': {
                    id: 78,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Seller Name': {
                    id: 79,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Storage Information': {
                    id: 41,
                    indexed: false,
                    mandatory: false,
                    type: 'text',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  SupplierDesc: {
                    id: 85,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  SupplierID: {
                    id: 66,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  SupplierName: {
                    id: 42,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  SupplierPhone: {
                    id: 87,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Unit Of Measurement': {
                    id: 43,
                    indexed: false,
                    mandatory: false,
                    type: 'enum',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: ['EA', 'CAR', 'SU1', 'KGM', 'PK', 'SU2'],
                    },
                  },
                  'Unit Of Weight': {
                    id: 44,
                    indexed: false,
                    mandatory: false,
                    type: 'enum',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: ['kg', 'ml', 'g', 'L', 'l'],
                    },
                  },
                  'Vendor Code': {
                    id: 109,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Warranty Information': {
                    id: 96,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  Weight: {
                    id: 45,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'ZS HTime': {
                    id: 100,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  collectibleFromStore: {
                    id: 95,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  isDeliveryFee: {
                    id: 90,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  isEndlessAisle: {
                    id: 74,
                    indexed: true,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                },
                store: {
                  'B2B Delivery Days': {
                    id: 167,
                    indexed: false,
                    mandatory: false,
                    type: 'number',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'B2B Enabled': {
                    id: 172,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Batch Order Enabled': {
                    id: 133,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Batch Order Percentage': {
                    id: 123,
                    indexed: false,
                    mandatory: false,
                    type: 'number',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Delivery Days': {
                    id: 114,
                    indexed: false,
                    mandatory: false,
                    type: 'number',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Delivery type': {
                    id: 104,
                    indexed: false,
                    mandatory: false,
                    type: 'enum',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: [
                        'fairprice 1',
                        'faireprice 2',
                        'faireprice 3',
                        'faireprice 4',
                        'faireprice 5',
                      ],
                    },
                  },
                  Email: {
                    id: 94,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'FFS Exclusive': {
                    id: 174,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  Fax: {
                    id: 55,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Fresh Report Picking': {
                    id: 140,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Link ID': {
                    id: 76,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Past Stock Reservation Days': {
                    id: 132,
                    indexed: false,
                    mandatory: false,
                    type: 'number',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  Phone: {
                    id: 56,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'SAP Code': {
                    id: 53,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'SAP Inventory Download': {
                    id: 137,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'SAP Posting Disabled': {
                    id: 144,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'SAP Zone Code': {
                    id: 142,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'SnG Check-in Blocked': {
                    id: 101,
                    indexed: false,
                    mandatory: false,
                    type: 'boolean',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'SnG Geo Checkin Radius': {
                    id: 113,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'SnG Operational Hours': {
                    id: 116,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Store Code': {
                    id: 134,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  'Store Format': {
                    id: 54,
                    indexed: false,
                    mandatory: false,
                    type: 'enum',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: [
                        'FairPrice',
                        'FairPrice Xtra',
                        'FairPrice Shop',
                        'FairPrice Finest',
                        'Warehouse Club',
                        'Click and Collect',
                      ],
                    },
                  },
                  'WCS Id': {
                    id: 58,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                },
                variant: {
                  test161673359: {
                    id: 152,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  test161673366: {
                    id: 153,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  test161673367: {
                    id: 154,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  test161673377: {
                    id: 155,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  test161673383: {
                    id: 156,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  test161673396: {
                    id: 157,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  test161673400: {
                    id: 158,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  test161673408: {
                    id: 159,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  test161673419: {
                    id: 160,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  test161673422: {
                    id: 161,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  test161673430: {
                    id: 162,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  testing12: {
                    id: 151,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                  testing123: {
                    id: 148,
                    indexed: false,
                    mandatory: false,
                    type: 'string',
                    typeMeta: {
                      allowMultiple: false,
                      allowedValue: null,
                    },
                  },
                },
              },
            },
            store: [
              {
                address: '1 Joo Koon Cir, Singapore 629116',
                b2bTierSetupId: 62,
                businessHours: null,
                clientId: '004',
                hasClickCollect: true,
                hasDeliveryHub: true,
                hasPicking: true,
                hasSelfCheckout: false,
                id: 4,
                languages: '',
                latitude: 1.3271623,
                longitude: 103.6788611,
                metaData: {
                  'B2B Delivery Days': 7,
                  'Batch Order Enabled': true,
                  'Batch Order Percentage': 0,
                  'Delivery Days': 5,
                  'Delivery type': '',
                  Email: '',
                  Fax: '',
                  'Fresh Report Picking': false,
                  'Link ID': '',
                  'Past Stock Reservation Days': 1,
                  Phone: '',
                  'SAP Code': '004',
                  'SAP Inventory Download': false,
                  'SAP Posting Disabled': false,
                  'SAP Zone Code': '',
                  'SnG Check-in Blocked': false,
                  'SnG Geo Checkin Radius': '',
                  'SnG Operational Hours': '',
                  'Store Code': 'PFC',
                  'Store Format': '',
                  'WCS Id': '',
                },
                name: 'Fairprice PFC',
                pickingStoreId: null,
                status: 'ENABLED',
                tierSetupId: 50,
              },
            ],
            inventory: {
              multipleMrp: null,
              stockStrategy: null,
              taxExclusivePrice: null,
              taxes: null,
            },
            product: {
              barcodes: ['4712052989979'],
              brand: {
                clientId: 'AH YUAN',
                description: null,
                id: 33508,
                image: null,
                languages: '',
                logo: null,
                name: 'Ah Yuan',
                productsCount: 74,
                slug: 'ah-yuan-1',
                status: 'ENABLED',
              },
              bulkOrderThreshold: 0,
              clientItemId: '13117038',
              createdAt: '2020-04-17T12:19:14+08:00',
              description: 'AH YUAN WILD MUG REST/SERUM 30ML',
              handlingDays: null,
              hasVariants: 1,
              id: 1324657,
              images: null,
              imagesExtra: null,
              languages: '',
              metaData: {
                'Country of Origin': 'North Korea',
                'Fp Seller Name': 'A7 OUTSOURCING SERVICES PTE LTD',
                'LinkPoint Eligible': true,
                'SAP SubClass': 310670405,
                'Unit Of Measurement': 'EA',
              },
              name: 'AH YUAN    WILD MUG REST/SERUM  30ML',
              primaryCategory: {},
              secondaryCategories: [
                {
                  clientId: '310670405',
                  description: null,
                  id: 1640,
                  image: null,
                  languages: '',
                  name: 'SAP SubClass 310670405',
                  parentCategory: {
                    clientId: null,
                    description: null,
                    id: 840,
                    image: null,
                    languages: '',
                    name: 'SAP Categories',
                    parentCategory: null,
                    productsCount: 0,
                    slug: 'sap-categories',
                    status: 'HIDDEN',
                    updatedBy: '',
                  },
                  productsCount: 18,
                  slug: 'sap-subclass-310670405',
                  status: 'HIDDEN',
                  updatedBy: '',
                },
              ],
              slug: 'ah-yuan----wild-mug-rest/serum--30ml-13117038',
              soldByWeight: 0,
              status: 'ENABLED',
              stockOverride: {
                maxPurchasableStock: null,
                stockBuffer: null,
                storeBulkOrderThreshold: null,
              },
              tags: [],
              updatedBy: '',
              variants: null,
              vendor_code: 0,
            },
          },
        }));
  });
});

describe('Test Product Form', () => {
  it('should render the component', () => {
    const {getByText} = render(
      <ProductForm
        options={{
          getInventoryData: () => Promise.resolve(inventoryData),
          multipleStores: true,
          getStores: () => Promise.resolve([{id: 4}]),
        }}
      />,
    );
  });

  it('should update store status', () => {
    const productForm = new ProductForm({});

    productForm.setState = () => {};
    productForm.updateState = () => {};

    productForm.updateStoreStatus(['4712052989979'], true, 4, 0);
  });
});

const inventoryData = {
  code: 200,
  status: 'SUCCESS',
  data: [
    {
      dailyPreset: null,
      discount: 0,
      inStoreStock: null,
      inventoryType: null,
      location: {aisle: null, position: null, rack: null},
      mrp: 37.5,
      onlineStock: null,
      overPickingThreshold: null,
      packInfo: null,
      sapStock: null,
      sapUnit: null,
      shortPickingThreshold: null,
      skuType: null,
      status: 'ENABLED',
      stock: 0,
      stockVariance: null,
      tax: null,
      unlimitedStock: false,
      updatedAt: '2021-10-09T03:01:39+08:00',
    },
  ],
};
