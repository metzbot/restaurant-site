export function pageContact() {
  let mainContent = document.getElementById('mainContent');
  mainContent.innerHTML = '';

  let contactInfo = document.createElement('p');
  contactInfo.textContent = '17288 Skyline Blvd, Woodside, CA 94062';
  let phone = document.createElement('p');
  phone.id = 'phone';
  phone.textContent = '(650) 851-0303';

  let map = document.createElement('div');
  map.id = 'map';
  map.innerHTML = `<iframe
                      style="border:0"
                      loading="lazy"
                      allowfullscreen
                      referrerpolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12680.96925266968!2d-122.27392101616998!3d37.384101434414404!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fa5d893348bb9%3A0x78676423e748bb2b!2sAlice&#39;s%20Restaurant!5e0!3m2!1sen!2sus!4v1649614648172!5m2!1sen!2sus">
                    </iframe>`;

  let hours = document.createElement('table');
  hours.id = 'hoursTable';
  let hoursBody = document.createElement('tbody');
  let sunday = document.createElement('tr');
  let monday = document.createElement('tr');
  let tuesday = document.createElement('tr');
  let wednesday = document.createElement('tr');
  let thursday = document.createElement('tr');
  let friday = document.createElement('tr');
  let saturday = document.createElement('tr');

  sunday.innerHTML = `<td>Sunday</td><td>8AM-7PM</td>`;
  monday.innerHTML = `<td>Monday</td><td>8AM-8PM</td>`;
  tuesday.innerHTML = `<td>Tuesday</td><td>8AM-8PM</td>`;
  wednesday.innerHTML = `<td>Wednesday</td><td>8AM-8PM</td>`;
  thursday.innerHTML = `<td>Thursday</td><td>8AM-8PM</td>`;
  friday.innerHTML = `<td>Friday</td><td>8AM-8PM</td>`;
  saturday.innerHTML = `<td>Saturday</td><td>8AM-8PM</td>`;

  hoursBody.append(sunday, monday, tuesday, wednesday, thursday, friday, saturday);
  hours.appendChild(hoursBody);

  mainContent.append(contactInfo, phone, map, hours);
}