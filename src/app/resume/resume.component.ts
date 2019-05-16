import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  pdfSrc = '../../../src/assets/Nicholas Robinson 2018 resume updated (1).pdf';
  constructor() {}

  ngOnInit() {}
}
