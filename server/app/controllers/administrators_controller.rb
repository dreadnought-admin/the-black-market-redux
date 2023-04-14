class AdministratorsController < ApplicationController
    before_action :is_admin?
end
