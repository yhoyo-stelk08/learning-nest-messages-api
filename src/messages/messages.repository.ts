import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async findAll() {
    // read all content from messages.json and return it
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async findOne(id: string) {
    // read all content from messages.json and return the message with the given id
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async create(content: string) {
    // read all content from messages.json, add a new message with the given content, and write it back to messages.json

    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages, null, 2));
  }
}
