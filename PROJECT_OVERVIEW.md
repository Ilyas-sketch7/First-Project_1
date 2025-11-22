# VoyageFlow - Travel Planning Web Application

## 📋 Project Overview
VoyageFlow is a modern, responsive travel planning website that allows users to explore destinations, calculate trip costs, and book travel packages. Built with HTML5, CSS3, and vanilla JavaScript.

## 🗂️ Project Structure
```
VoyageFlow/
├── index.html          # Single-page application with all views
├── style.css           # Complete styling with travel theme
├── script.js           # Core navigation & utilities
├── validation.js       # Form validation logic
└── calculator.js       # City-specific price calculator
```

## ✨ Key Features

### 1. Home Page
- **Ocean travel theme** with blue (#00b4d8) and orange (#f77f00) colors
- Animated hero section with gradient text effects
- About section and feature highlights
- Showcase of 5 destinations: Paris, Tokyo, Rome, Bali, NYC

### 2. User Registration
- **Validation**: 10-digit phone, 6-digit PIN, valid email
- **Real-time error messages** with popup alerts
- **Auto-login** after successful registration
- Redirects to home page after registration

### 3. City Showcase Pages
- Individual detail pages for each city
- "Book Now" button navigates to calculator
- Beautiful city images and descriptions
- Responsive card layout

### 4. Trip Calculator
- **City-specific options** for each destination
- **Travel**: Economy/Business flights, metro passes, airport transfers
- **Food**: Restaurant tours, cooking classes, fine dining
- **Activities**: Sightseeing, museums, adventure sports (with images)
- **Extras**: Insurance, accommodation upgrades, luggage (with images)
- **Real-time total calculation** with sticky confirm button
- Vertical layout for options (image, text, price stacked)

### 5. Booking Confirmation
- Displays selected destination and options
- Booking reference number
- Trip summary with total cost
- Option to start over or book another trip

## 🎨 Design Highlights

### Color Scheme
- **Primary**: Ocean blue (#00b4d8, #48cae4, #0096c7)
- **Secondary**: Sunset orange (#f77f00, #fcbf49)
- **Background**: Deep ocean (#001219, #003844, #005f73)
- **Text**: White (#ffffff) for inputs and content

### Visual Effects
- Gradient backgrounds with SVG compass patterns
- Hover animations with scale and glow effects
- Rotating radial gradients on options
- Ocean blue glow on showcase card hover
- Sticky confirm button with hover text toggle

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly 44px minimum targets
- Optimized for all screen sizes

## 🔧 Technical Implementation

### JavaScript Features
- **calculator.js**: City-specific options data structure
  - Each city has 4 travel options with images
  - Each city has 4 food options with images
  - Dynamic option loading based on selected city
  - Real-time total calculation
  
- **validation.js**: Form validation
  - Phone: Exactly 10 digits (not more, not less)
  - PIN: Exactly 6 digits
  - Email: Standard email format
  - Inline error messages + popup alerts

- **script.js**: Navigation & utilities
  - View switching with fade transitions
  - Modal management (login, register, booking)
  - Session storage for user data
  - Alert notifications

### CSS Features
- **CSS Variables**: Centralized color/spacing management
- **Flexbox & Grid**: Modern layout systems
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: WCAG-compliant contrast ratios

## 🎯 User Journey

```
1. LANDING → View home page with destinations

2. REGISTER → Create account
   - Enter name, email, 10-digit phone, 6-digit PIN
   - See popup alerts for invalid inputs
   - Auto-redirect to home after success

3. EXPLORE → Browse city showcase
   - Click on any of 5 cities (Paris, Tokyo, Rome, Bali, NYC)
   - View city details and attractions

4. CALCULATE → Plan trip with calculator
   - Select city-specific travel options (with thumbnails)
   - Choose food packages (with thumbnails)
   - Pick activities (with thumbnails)
   - Add extras like insurance (with thumbnails)
   - See total update in real-time
   - Confirm booking with sticky button

5. CONFIRM → View booking confirmation
   - See summary with reference number
   - Review all selected options and total cost
```

## 📱 Responsive Breakpoints
- **Mobile**: < 600px (single column, stacked layout)
- **Tablet**: 600px - 900px (two columns)
- **Desktop**: > 900px (three/four columns, full features)

## ✅ Recent Updates
- ✓ Changed color scheme to ocean/travel theme
- ✓ Fixed phone validation (exactly 10 digits)
- ✓ Changed input text color to white
- ✓ Added popup alerts for validation errors
- ✓ Fixed registration redirect to home page
- ✓ Added images to all calculator options
- ✓ Changed option layout to vertical (stacked text and price)
- ✓ Updated all city-specific travel images
- ✓ Fixed business class and airport transfer images
- ✓ Made confirm button sticky with hover text effect

## 🔐 Validation Rules
- **Full Name**: Minimum 3 characters
- **Email**: Valid email format (user@domain.com)
- **Phone**: Exactly 10 digits (numbers only)
- **PIN**: Exactly 6 digits (numbers only)

## 🌐 Browser Compatibility
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Project Stats
- **Total Lines**: ~4000+ lines of code
- **Files**: 5 main files (HTML, CSS, 3 JS)
- **Views**: 7 (Home + 5 cities + Calculator + Confirmation)
- **Destinations**: 5 cities with unique options
- **Total Options**: 60+ travel/food/activity choices

## 🚀 Technologies Used
- **HTML5**: Semantic structure
- **CSS3**: Modern styling with variables, grid, flexbox
- **JavaScript ES6**: Vanilla JS (no frameworks)
- **Unsplash API**: High-quality destination images

---

**Version**: 2.0  
**Last Updated**: November 2025  
**Status**: ✅ Fully Functional
