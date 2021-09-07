#!/bin/bash

#nvm install v14

rm -rf ./src/
cp -rf ./../frontend/src/ ./src/

mv src/index.aero.html src/index.html



#./src/aero/aero.module.ts
sed -i 's/import { AngularFireMessagingModule }/\/\/import { AngularFireMessagingModule }/g' ./src/aero/aero.module.ts
sed -i 's/import { AngularFireDatabaseModule }/\/\/import { AngularFireDatabaseModule }/g' ./src/aero/aero.module.ts
sed -i 's/import { AngularFireAuthModule }/\/\/import { AngularFireAuthModule }/g' ./src/aero/aero.module.ts
sed -i 's/import { AngularFireModule }/\/\/import { AngularFireModule }/g' ./src/aero/aero.module.ts
sed -i 's/import { MessagingService }/\/\/import { MessagingService }/g' ./src/aero/aero.module.ts

sed -i 's/AngularFireMessagingModule,/\/\/AngularFireMessagingModule,/g' ./src/aero/aero.module.ts
sed -i 's/AngularFireDatabaseModule,/\/\/AngularFireDatabaseModule,/g' ./src/aero/aero.module.ts
sed -i 's/AngularFireAuthModule,/\/\/AngularFireAuthModule,/g' ./src/aero/aero.module.ts
sed -i 's/AngularFireModule./\/\/AngularFireModule./g' ./src/aero/aero.module.ts
sed -i 's/MessagingService,/\/\/MessagingService,/g' ./src/aero/aero.module.ts


#./src/aero/pages/helpers/messaging.service.ts
sed -i 's/import { Injectable }/\/*import { Injectable }/g' ./src/aero/pages/helpers/messaging.service.ts
echo '*/' >> ./src/aero/pages/helpers/messaging.service.ts


#./src/aero/aero.component.ts
sed -i 's/import { MessagingService }/\/\/import { MessagingService }/g' ./src/aero/aero.component.ts
sed -i 's/this.messagingService/\/\/this.messagingService/g' ./src/aero/aero.component.ts
sed -i 's/private messagingService: MessagingService/\/\/private messagingService: MessagingService/g' ./src/aero/aero.component.ts








ionic build
#npx cap sync android
#npx cap open android