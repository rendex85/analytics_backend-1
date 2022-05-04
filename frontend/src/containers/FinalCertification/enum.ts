export enum CertificationFields {
    DISCIPLINE_CODE= "discipline_code",
    ID = "id",
    TITLE= "title",
    YEAR= "year",
    AUTHORS= "authors",
    OP_LEADER= "op_leader",
    GENERAL_PROVISIONS_OTHER_DOCUMENTS= "general_provisions_other_documents",
    FILLING_AND_APPROVAL_TIME= "filling_and_approval_time",
    WORK_ON_VKR_CONTENT_TIME= "work_on_vkr_content_time",
    PRE_DEFENCE_TIME= "pre_defence_time",
    ANTI_PLAGIARISM_ANALYSIS_TIME= "anti_plagiarism_analysis_time",
    PRELIMINARY_DEFENSE= "preliminary_defense",
    ANTI_PLAGIARISM= "anti_plagiarism",
    STRUCTURE_ELEMENTS_OPTIONAL= "structure_elements_optional",
    OPTIONAL_DESIGN_REQUIREMENTS= "optional_design_requirements",
    CONTENT_REQUIREMENTS= "content_requirements",
    DEFENCE_PRESENTATION_REQUIREMENTS= "defence_presentation_requirements",
    GIA_BASE= "gia_base",
    STRUCTURAL_UNIT= "structural_unit",
    CONTENT_CORRESPONDENCE_MARKS= "content_correspondence_marks",
    RELEVANCE_MARKS= "relevance_marks",
    SPECIALIZATION_CORRESPONDENCE_MARKS= "specialization_correspondence_marks",
    CORRECTNESS_OF_METHODS_MARKS= "correctness_of_methods_marks",
    QUALITY_AND_LOGIC_MARKS= "quality_and_logic_marks",
    VALIDITY_MARKS= "validity_marks",
    SIGNIFICANCE_MARKS= "significance_marks",
    IMPLEMENTATION_MARKS= "implementation_marks",
    REPORT_QUALITY_MARKS= "report_quality_marks",
    PRESENTATION_QUALITY_MARKS= "presentation_quality_marks",
    ANSWERS_QUALITY_MARKS= "answers_quality_marks"
}

export enum CertificationMarkFields {
    ID = 'id',
    GREAT = 'great',
    GOOD = 'good',
    SATISFACTORILY = 'satisfactorily',
    UNSATISFACTORY = 'unsatisfactory',
}

export enum StructuralUnitFields {
    ID = "id",
    TITLE = "title",
    ISU_ID = "isu_id",
}

export enum CertificationStepsRussian {
    GENERAL = 'Главное',
    DATES = 'Даты',
    FEATURES = 'Особенности',
    ASSESSMENT = 'Оценка',
}

export const CertificationStepsRussianList = Object.entries(CertificationStepsRussian).map(([, value]) => value);