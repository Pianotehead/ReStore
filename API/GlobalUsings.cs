﻿global using System;
global using System.Collections.Generic;
global using System.Text;
global using API.Data;
global using API.Entities;
global using API.RequestHelpers;
global using API.Services;
global using Microsoft.AspNetCore.Authentication.JwtBearer;
global using Microsoft.AspNetCore.Builder;
global using Microsoft.EntityFrameworkCore;
global using Microsoft.Extensions.DependencyInjection;
global using Microsoft.IdentityModel.Tokens;
global using Microsoft.OpenApi.Models;
global using Microsoft.Extensions.Configuration;
global using TokenService = API.Services.TokenService;
global using API.Middleware;
global using Microsoft.Extensions.Hosting;
global using Microsoft.AspNetCore.Identity;
global using Microsoft.Extensions.Logging;
global using API.DTOs;
global using API.Extensions;
global using Microsoft.AspNetCore.Authorization;
global using Microsoft.AspNetCore.Mvc;
global using System.Linq;
global using System.Threading.Tasks;