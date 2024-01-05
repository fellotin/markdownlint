// @ts-check

"use strict";

const { addErrorDetailIf } = require("../helpers");
const { filterByTypes } = require("../helpers/micromark.cjs");

module.exports = {
  "names": [ "MD056", "table-column-count" ],
  "description": "Table column count",
  "tags": [ "table" ],
  "function": function MD056(params, onError) {
    const tables = filterByTypes(params.parsers.micromark.tokens, [ "table" ]);
    for (const table of tables) {
      const rows = filterByTypes(table.children, [ "tableDelimiterRow", "tableRow" ]);
      let expectedCount = 0;
      for (const row of rows) {
        const cells = filterByTypes(row.children, [ "tableContent" ]);
        const actualCount = cells.length;
        expectedCount ||= actualCount;
        addErrorDetailIf(
          onError,
          row.endLine,
          expectedCount,
          actualCount,
          `Too ${actualCount > expectedCount ? "many" : "few"} columns`
        );
      }
    }
  }
}
