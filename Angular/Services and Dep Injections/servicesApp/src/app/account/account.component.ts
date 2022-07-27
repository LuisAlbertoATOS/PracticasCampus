import { Component, Input } from '@angular/core';
import { AccountService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  // providers: [LoggingService, AccountService]
})
export class AccountComponent {
  @Input() account!: { name: string; status: string; };
  @Input() id!: number;

  constructor(private loggingService: LoggingService,
    private accountService: AccountService){}

  onSetTo(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
