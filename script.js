const currentDate = moment().format("dddd Do, MMMM ");
  
$("#currentDay").text(currentDate);

const container = $(".container");
businessHours.forEach(function(hour) {
  const row = $("<div>").addClass("row time-block");

  const hourCol = $("<div>").addClass("col-md-1 hour");
  const hourText = $("<p>").text(hour.hour + hour.meridiem);
  hourCol.append(hourText);

  const descriptionCol = $("<div>").addClass("col-md-10 description");
  const descriptionTextarea = $("<textarea>");
  descriptionCol.append(descriptionTextarea);

  const savedEvent = localStorage.getItem(hour.hour + hour.meridiem);
  if (savedEvent) {
    descriptionTextarea.val(savedEvent);
  }

  const saveCol = $("<div>").addClass("col-md-1 saveBtn");
  const saveIcon = $("<i>").addClass("fas fa-save");
  saveCol.append(saveIcon);

  row.append(hourCol, descriptionCol, saveCol);

  container.append(row);
});

updateTimeblockColors();
