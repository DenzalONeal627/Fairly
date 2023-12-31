USE [Fairly]
GO
/****** Object:  StoredProcedure [dbo].[SurveyAnswers_Select_BySurveyInstanceId]    Script Date: 7/5/2023 2:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

 --=============================================
 --Author: 
 --Create date: 
 --Description: 
 --Code Reviewer:  

 --MODIFIED BY: 
 --MODIFIED DATE:
 --Code Reviewer:
 --Note: 
 --=============================================
ALTER PROCEDURE [dbo].[SurveyAnswers_Select_BySurveyInstanceId]
			@SurveyInstanceId int

AS

/* ---------------TEST-------------
	
DECLARE @SurveyInstanceId int = 248

EXEC [dbo].[SurveyAnswers_Select_BySurveyInstanceId] @SurveyInstanceId

*/
BEGIN
    

	SELECT sa.[Id]
		   ,si.[Id] as [InstanceId]
		   ,sa.[QuestionId]
		   ,sa.[AnswerOptionId]
		   ,sa.[Answer]
		   ,sa.[AnswerNumber]
		   ,sa.[DateCreated]
		   ,sa.[DateModified]

	FROM [dbo].[SurveyAnswers] as sa 
	inner join dbo.SurveysInstances as si on  sa.InstanceId = si.Id 
	inner join dbo. SurveyQuestions as sq on sa.QuestionId = sq.Id
	inner join dbo.SurveyQuestionAnswerOptions as sqao on sqao.Id  = sa.AnswerOptionId
	left join dbo.Surveys as s on s.Id=si.SurveyId

	WHERE si.Id = @SurveyInstanceId
  
END