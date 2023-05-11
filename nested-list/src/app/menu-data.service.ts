import { Injectable } from '@angular/core';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuDataService {

  menu: Menu[] = [
    {
      name: 'Item 1',
      child: [
        {
          name: 'Item 1.1',
          child: [
            { name: 'Item 1.1.1', child: [] },
            { name: 'Item 1.1.2', child: [] },
            {
              name: 'Item 1.1.3',
              child: [{ name: 'Item 1.1.3.1', child: [] }],
            },
            {
              name: 'Item 1.1.4',
              child: [
                { name: 'Item 1.1.4.1', child: [] },
                { name: 'Item 1.1.4.2', child: [] },
              ],
            },
          ],
        },
        {
          name: 'Item 1.2',
          child: [
            { name: 'Item 1.2.1', child: [] },
            {
              name: 'Item 1.2.2',
              child: [{ name: 'Item 1.2.2.1', child: [] }],
            },
            {
              name: 'Item 1.2.3',
              child: [
                { name: 'Item 1.2.3.1', child: [] },
                {
                  name: 'Item 1.2.3.2',
                  child: [{ name: 'Item 1.2.3.2.1', child: [] }],
                },
                { name: 'Item 1.2.3.3', child: [] },
              ],
            },
          ],
        },
      ],
    },
  ];


  constructor() { }
}
