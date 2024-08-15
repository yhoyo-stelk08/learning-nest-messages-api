import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'List all messages';
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
    return 'Create a message';
  }

  @Get(':id')
  getMessage(@Param('id') id: string) {
    console.log(id);
    return 'Get a message';
  }
}
