import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct',
  templateUrl: './struct.component.html',
  styleUrls: ['./struct.component.css']
})
export class StructComponent implements OnInit {
  filterStatus = 'WATCH_ALL';
  newEn: '';
  newVn: '';
  isShowForm = false;
  arrObject = ['Angular', 'NodeJs', 'ExpressJs', 'MonggoDB', 'MEAN'];  // Project Data
  arrWords = [
    { id: 1, en: 'action', vn: 'Hành Động', memorized: true },
    { id: 2, en: 'actor', vn: 'Diễn Viên', memorized: false },
    { id: 3, en: 'activity', vn: 'Hoạt Động', memorized: true },
    { id: 4, en: 'active', vn: 'Chủ Động', memorized: true },
    { id: 5, en: 'bath', vn: 'Tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'Nhà Tắm', memorized: true },
    { id: 7, en: 'Green', vn: 'Màu Xanh Lá Cây', memorized: true }
  ];  // Word Data list
  constructor() { }

  ngOnInit() {
  }  // This Is Angular Life Cycle Hook

  addNewWord() {
    this.arrWords.unshift({
      id: this.arrWords.length + 1,
      en: this.newEn,
      vn: this.newVn,
      memorized: false
    });
    this.newEn = '',
      this.newVn = '',
      this.isShowForm = false;  // Set Clear Input And Hidden Form Add New Word
  }  // Funtion Add New Word

  removeWord(id: number) {
    const index = this.arrWords.findIndex(word => word.id === id); // Find Index Id Of array
    this.arrWords.splice(index, 1); // Use Splice Method To Delete
  } // Remove Word Form List

  getShowStatus(memorized: boolean) {
    const watchAll = this.filterStatus === 'WATCH_ALL';
    const rememberWord = this.filterStatus === 'REMEMBER_WORD' && memorized;
    const unRememberWord = this.filterStatus === 'UNREMEMBER_WORD' && !memorized;
    return watchAll || rememberWord || unRememberWord;
  } // Filter Function

}
