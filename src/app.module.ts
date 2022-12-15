import { Module } from '@nestjs/common';
import { AppController } from './infra/app.controller';
import { HttpModule } from './infra/http.module';
import { MailService } from './mail/mail.service';
import { PostMarkMailService } from './mail/postmark-mail.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    HttpModule
  ],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}

// Injeção de dependência