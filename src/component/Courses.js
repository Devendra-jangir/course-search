import React, { Component } from 'react'
import CoursesItem from './CoursesItem'

export class Courses extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>Our top courses</h2>
        <div className="row">
            <div className="col-md-4">
                <CoursesItem title = "ML" description="this course is usefull for machine learning"  imageurl = "https://media.istockphoto.com/id/1329808536/photo/digital-transformation-concept-system-engineering-binary-code-programming.jpg?s=2048x2048&w=is&k=20&c=W0yn3J7x1PNfzCqhSTBEyARt2TZ5JBqeKYrTY8sAN5E="/>
            </div>
            <div className="col-md-4">
                <CoursesItem title = "web dev" description="this course is usefull for learn web devdevlopment" imageurl = "https://images.unsplash.com/photo-1573496773905-f5b17e717f05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"/>
            </div>
            <div className="col-md-4">
                <CoursesItem title = "java" description="java full courses here" imageurl = "https://media.istockphoto.com/id/870344898/photo/3d-text-of-java.jpg?s=612x612&w=is&k=20&c=iGV5l9g6MeH-QLsRiAmaWzDueqn1TNE5rksu7Aq-LZY="/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <CoursesItem title = "python" description="All top python courses are here"  imageurl = "https://media.istockphoto.com/id/1189210101/photo/python-programming-language-concept-woman-developer-with-her-hand-holding-modern-sign-with.jpg?b=1&s=170667a&w=0&k=20&c=2olSCm8U7KNUS6RuCFZcgrPvWy_H_QMgyLbAZWnFJ28="/>
            </div>
            <div className="col-md-4">
                <CoursesItem title = "C/C++" description="All C++/C courses are here" imageurl = "https://media.istockphoto.com/id/1386341272/photo/abstract-modern-tech-of-programming-code-screen-developer.jpg?b=1&s=170667a&w=0&k=20&c=he7tDY0-AW8r5q7BVTCHMuxnCPaeKsng1-RZxyCtfTE="/>
            </div>
            <div className="col-md-4">
                <CoursesItem title = "Udemy" description="All Udemy courses are here" imageurl = "https://images.unsplash.com/photo-1654277041028-ffa014fb301b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dWRlbXklMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
            </div>
        </div>
      </div>
    )
  }
}

export default Courses
