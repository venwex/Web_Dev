from django.urls import path
from .views import CompaniesList, CompanyDetailView, ListVacancyByCompany, VacanciesList, VacancyDetailView, VacancyTopTenView

urlpatterns = [
    path('companies', CompaniesList.as_view()),
    path('companies/<int:pk>/', CompanyDetailView.as_view()),
    path('companies/<int:pk>/vacancies/', ListVacancyByCompany.as_view()),
    path('vacancies/', VacanciesList.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailView.as_view()),
    path('vacancies/top_ten', VacancyTopTenView.as_view())
]

# http://127.0.0.1:8000/api/companies/1/vacancies/