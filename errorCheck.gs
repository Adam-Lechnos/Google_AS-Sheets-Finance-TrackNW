function errorCheck() {

   var sheetReturnData = SpreadsheetApp.getActive().getSheetByName('Return Data')


   var sheetReturnDataError = sheetReturnData.getRange('B1').getValue()

   if (sheetReturnDataError == true){
    var emailAddress = 'adam.lechnos@gmail.com'
    var subject = 'Spreadsheet error - Networth Tracking'
    var message = "Check the 'Return Data' tab within the Networth Tracking sheet - https://docs.google.com/spreadsheets/d/1HRHfm9C9bndRZditi0oTWV-h-d-ldQdclmIas0vMLRA/edit#gid=693824714"
    MailApp.sendEmail(emailAddress, subject, message);
   }
  
}
