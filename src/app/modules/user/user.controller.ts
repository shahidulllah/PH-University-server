import { NextFunction, Request, RequestHandler, Response } from 'express'
import sendResponse from '../../utils/sendResponse'
import { UserServices } from './user.service'
import { StatusCodes } from 'http-status-codes'
import catchAsync from '../../utils/catchAsync'

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body

  // const zodParsedData = studentValidationSchema.parse(studentData);

  const result = await UserServices.createStudentIntoDB(password, studentData)

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Student is created succesfully',
    data: result,
  })
})

export const UserControllers = {
  createStudent,
}
