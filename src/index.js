import { Entry } from './apps.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$("#word-counter").submit(function(event) {
  event.preventDefault();
  const journalBody = $("#journal-body").val();
  let newEntry = new Entry ($('#word').val());
  newEntry.makeArray(journalBody);
  $('#total-count').text(newEntry.bodyWordCount(newEntry.body))
});


