import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  selectedSubcategory: string | null = null;
  location: string = '';
  showCard: boolean = false;

  services = [
    {
      id: 'hair',
      name: 'Hair Styling',
      icon: 'fas fa-cut',
      subcategories: ['Cutting', 'Coloring', 'Styling']
    },
    {
      id: 'makeup',
      name: 'Makeup',
      icon: 'fas fa-paint-brush',
      subcategories: ['Bridal Makeup', 'Event Makeup', 'Daily Makeup']
    },
    {
      id: 'nails',
      name: 'Nail Art',
      icon: 'fas fa-hand-sparkles',
      subcategories: ['Acrylic Nails', 'Temporary Nails', 'Graphics']
    },
    {
      id: 'facials',
      name: 'Facials',
      icon: 'fas fa-spa',
      subcategories: ['Anti-Aging', 'Hydration', 'Brightening']
    },
    {
      id: 'spa',
      name: 'Spa Treatments',
      icon: 'fas fa-hot-tub',
      subcategories: ['Massage', 'Sauna', 'Body Wrap']
    },
    {
      id: 'grooming',
      name: 'Personal Grooming',
      icon: 'fas fa-user-tie',
      subcategories: ['Shaving', 'Waxing', 'Threading']
    }
  ];

  stylists: any = {
    'Cutting': [
      { name: 'Alice Smith', rating: 4.5 },
      { name: 'John Doe', rating: 4.2 },
      { name: 'Emma Brown', rating: 4.8 }
    ],
    'Coloring': [
      { name: 'Sophia Davis', rating: 4.7 },
      { name: 'Olivia Martinez', rating: 4.6 },
      { name: 'Liam Garcia', rating: 4.4 }
    ],
    'Styling': [
      { name: 'Mia Thomas', rating: 4.9 },
      { name: 'Charlotte White', rating: 4.5 },
      { name: 'James Wilson', rating: 4.3 }
    ],
    'Bridal Makeup': [
      { name: 'Sophia Turner', rating: 4.6 },
      { name: 'Rachel Green', rating: 4.7 },
      { name: 'Lily Adams', rating: 4.8 }
    ],
    'Event Makeup': [
      { name: 'Natalie Brown', rating: 4.9 },
      { name: 'Zoe Lewis', rating: 4.5 },
      { name: 'Olivia Clark', rating: 4.7 }
    ],
    'Daily Makeup': [
      { name: 'Amelia Scott', rating: 4.5 },
      { name: 'Ella Harris', rating: 4.4 },
      { name: 'Ava Young', rating: 4.6 }
    ],
    'Acrylic Nails': [
      { name: 'Sophia Miller', rating: 4.7 },
      { name: 'Grace King', rating: 4.8 },
      { name: 'Chloe Hall', rating: 4.9 }
    ],
    'Temporary Nails': [
      { name: 'Samantha Lewis', rating: 4.4 },
      { name: 'Isabella Evans', rating: 4.5 },
      { name: 'Charlotte Harris', rating: 4.6 }
    ],
    'Graphics': [
      { name: 'Emily Walker', rating: 4.8 },
      { name: 'Eleanor Taylor', rating: 4.6 },
      { name: 'Alice White', rating: 4.7 }
    ],
  };

  toggleSubcategories(categoryId: string) {
    if (this.selectedSubcategory === categoryId) {
      this.selectedSubcategory = null; // Deselect if already selected
    } else {
      this.selectedSubcategory = categoryId; // Set the new category
    }
    this.showCard = false; // Hide the card initially
  }

  showStylistCard(subcategory: string) {
    this.showCard = true;
    this.selectedSubcategory = subcategory; // Set the selected subcategory
  }

  submitLocation() {
    alert('Location: ' + this.location);
  }
}
