# Google_AS-Sheets-Finance-TrackNW
Google Sheets automation for tracking net worth

## Google Apps Script Configuration

### Triggers

| Function | Event Source | Time Based Trigger ( - nn)* | Time of Day | Failure Notifications |
| -------- | ------------ | ------------------ | ----------- | --------------------- |
| freezeNWdata | Time-driven | Month Timer - 28th | 7pm to 8pm | Weekly |
| populateHistoricRecord | Time-driven | Month timer - 15th | 11pm to midnight | weekly |
| populateHistoricRecord | Time-driven | Month timer - 1st | 11pm to midnight | weekly |

*\*Day if month if `Month timer` is selected*

<sup><sub>Spreadsheet Name: `Net Worth Tracking & Forecast Worksheet - Quarterly Log`</sup></sub>
