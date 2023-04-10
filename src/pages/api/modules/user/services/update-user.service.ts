import { PrismaService } from "../../../providers/prisma/prisma.service";
import { PrismaClient } from "@prisma/client";
import { UpdateUserDto } from "../interfaces/dtos/update-user.dto";
import bcrypt from "bcryptjs";

export class UpdateUserService {
  private prisma: PrismaClient = PrismaService;

  async execute(userId: string, data: UpdateUserDto) {
    let password: string | undefined = undefined;

    if (data.password) {
      password = await bcrypt.hash(data.password, 10);
    }

    const result = await this.prisma.user.update({
      where: { id: userId },
      data: {
        ...data,
        password,
      },
    });

    return result;
  }
}
