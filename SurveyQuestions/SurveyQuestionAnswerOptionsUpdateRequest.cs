﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sabio.Models.Requests.SurveyQuestions
{
    public class SurveyQuestionAnswerOptionsUpdateRequest : SurveyQuestionAnswerOptionsAddRequest, IModelIdentifier
    {

        public int Id { get; set; }
    }
}
