<?php

namespace Biz\Course\Service;

interface CourseService
{
    public function getCourse($id);

    public function findCoursesByCourseSetId($courseSetId);

    public function getDefaultCourseByCourseSetId($courseSetId);

    public function createCourse($course);

    public function updateCourse($id, $fields);

    public function copyCourse($copyId, $course);

    public function deleteCourse($id);

    public function closeCourse($id);

    public function saveCourseMarketing($courseMarketing);

    public function preparePublishment($id, $userId);

    public function auditPublishment($id, $userId, $reject, $remark);
}
