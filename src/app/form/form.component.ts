import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  dataForm!: FormGroup;
  isLoading = false;
  showModal = false;
  predictionResult = false;

  constructor(private fb: FormBuilder, private formService: FormService) {}

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      age: [
        null,
        [Validators.required, Validators.min(18), Validators.max(100)],
      ],
      job: ['unemployed', Validators.required],
      marital: ['single', Validators.required],
      education: ['primary', Validators.required],
      default: [0],
      balance: [0, Validators.required],
      housing: [0],
      loan: [0],
      contact: ['unknown'],
      month: ['jan'],
      campaign: [1, [Validators.required, Validators.min(1)]],
      previous: [0, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.dataForm.valid) {
      this.isLoading = true;
      const payload = this.dataForm.value;

      this.formService.sendData(payload).subscribe({
        next: (data) => {
          console.log('Sukces! Backend odpowiedział:', data);
          alert('Dane zostały wysłane pomyślnie!');
          this.predictionResult = data.response;
          this.showModal = true;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Błąd podczas wysyłania:', err);
          alert('Wystąpił błąd podczas połączenia z serwerem.');
          this.isLoading = false;
        },
      });
    }
  }

  closeModal() {
    this.showModal = false;
  }
}
