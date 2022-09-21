import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';
  serverElements = [ {type: 'server', name: 'Testserver', content: 'Just it´s a text'}];
  
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];


  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });

  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
    
  }

  onChangeFirst(){
    this.serverElements[0].name = 'Changed!';
  }
  onDestroy(){
    this.serverElements.splice(0,1);
  }


  onIntervalFired(fireNumber: number){
    if(fireNumber % 2 === 0){
      this.evenNumbers.push(fireNumber);
    }else{
      this.oddNumbers.push(fireNumber);
    }
  }
}
