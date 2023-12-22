/// <reference path="../types.d.ts" />

import API from './API';
import * as CacheService from './CacheService';
import * as CardService from './CardService';
import * as DriveApp from './DriveApp';
import HtmlService from './HtmlService';
import * as PropertiesService from './PropertiesService';
import * as SpreadsheetApp from './SpreadsheetApp';
import * as UI from './UI';

export const g = {
  API,
  CacheService,
  CardService,
  DriveApp,
  HtmlService,
  PropertiesService,
  SpreadsheetApp,
  UI
};

export { g as default };